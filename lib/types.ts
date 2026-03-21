export interface Project {
  id: string
  title: string
  description: string
  long_description: string | null
  category: string
  tech_stack: string[]
  preview_image: string | null
  file_url: string
  created_at: string
  updated_at: string
}

export interface Purchase {
  id: string
  user_id: string
  project_id: string
  amount_cents: number
  stripe_session_id: string | null
  status: string
  created_at: string
}

export interface Profile {
  id: string
  email: string | null
  display_name: string | null
  is_admin: boolean
  created_at: string
}

export interface Contact {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  subject: string,
  message: string
}
