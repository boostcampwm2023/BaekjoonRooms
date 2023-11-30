import { useLocation } from 'react-router-dom';

import Problems from '../components/Problems';
import ScoreboardButton from '../components/buttons/ScoreBoardButton';
import Chat from '../components/Chat';
import StartButton from '../components/buttons/StartButton';
import RoomInfo from '../components/RoomInfo';

export default function Room() {
  const location = useLocation();
  const isHost = location.state?.isHost;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-aod_fg">
      <div className="z-10 flex min-h-screen w-[50%] min-w-[300px] flex-col items-center gap-2 rounded-lg bg-aod_bg p-4 shadow-2xl">
        <RoomInfo />
        <Problems isHost={isHost} />
        <ScoreboardButton />
        <Chat />
        {isHost && <StartButton />}
      </div>
    </div>
  );
}
