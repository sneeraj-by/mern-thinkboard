import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import NoNotes from "../components/NoNotes";
import NoteCard from "../components/NoteCard";
import RateLimiterUI from "../components/RateLimiterUI";
import apiClient from "../lib/axios";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await apiClient.get("/notes");
        setNotes(response.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes:", error);
        if (error?.response && error?.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Error fetching notes");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimiterUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && <Loader />}
        {notes.length === 0 && !isRateLimited && !isLoading && <NoNotes />}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
