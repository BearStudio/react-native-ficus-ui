export interface AvatarOptions {
  name: string;
  getInitials?(name: string): string;
  src?: string;
}
