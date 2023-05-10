export interface CardProps {
  id: number;
  medium: string;
  title: string;
  artistDisplayName: string;
  image: string;
  creditLine: string;
  onClick: (id: number) => void;
}
