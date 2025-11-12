import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import {
  useActiveSession,
  useCreateSession,
  useMyRecentSessions,
} from "../hooks/useSession";
import Navbar from "../components/Navbar";
import WelcomeSection from "./WelcomeSection";
import StatsCards from './StatsCards'
import ActiveSessions from "./ActiveSessions";
import RecentSessions from './RecentSessions'
import CreateSessionModal from './CreateSessionModal';

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  // Modal aur room config state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" }); // 🔹 fixed key name

  // Custom React Query hooks
  const createSessionMutation = useCreateSession();
  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSession();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
    useMyRecentSessions();

  // Create room handler
  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return; // 🔹 fixed key names

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem, // 🔹 fixed
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  // Safe data access (avoid undefined errors)
  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  return (
    <>
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} /> {/* 🔹 fixed true */}
        {/*Grid Layout */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatsCards />
            <ActiveSessions />
          </div>
          <RecentSessions />
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;
