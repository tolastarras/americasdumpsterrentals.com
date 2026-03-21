import { User } from './user';

export interface ProfileTabsProps {
  user: User
  activeTab?: string
  avatarPreview?: string | null
  uploading?: boolean
  handleAvatarClick?: () => void
  removeAvatar?: () => void
}
