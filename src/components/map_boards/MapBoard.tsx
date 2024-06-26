import Image from 'next/image';

import { MapBoards } from '@/data/MapBoards';

type MapBoardProps = {
  id: string;
};

export function MapBoard({ id }: MapBoardProps) {
  const mapBoard = MapBoards.find((mapBoard) => mapBoard.id === id);
  if (!mapBoard) return null;
  return (
    <div>
      <Image
        alt={mapBoard.name}
        priority={true}
        src={`/img/maps/${mapBoard.image}.jpg`}
        className='w-full rounded-md object-contain shadow-lg'
        quality={85}
        width={1000}
        height={1000}
      />
    </div>
  );
}
