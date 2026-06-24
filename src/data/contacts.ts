export type Contact = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

export const CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Alice Martin',
    role: 'Développeuse Frontend',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: '2',
    name: 'Benoît Dubois',
    role: 'Développeur Backend',
    avatar: 'https://i.pravatar.cc/300?img=2',
  },
  {
    id: '3',
    name: 'Chloé Bernard',
    role: 'Designer UI/UX',
    avatar: 'https://i.pravatar.cc/300?img=3',
  },
  {
    id: '4',
    name: 'David Lefevre',
    role: 'Chef de projet',
    avatar: 'https://i.pravatar.cc/300?img=4',
  },
];
