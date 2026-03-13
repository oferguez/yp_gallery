import { rooms } from '../config/site';

export function getRoomById(roomId: string) {
  return rooms.find((room) => room.id === roomId);
}

export function getConnectedRooms(roomId: string) {
  const room = getRoomById(roomId);
  if (!room) return [];
  return room.connectedTo.map((id) => getRoomById(id)).filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
}
