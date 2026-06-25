import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eqlnmpmfhxdllkuetury.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const THUMB_BASE = `${supabaseUrl}/storage/v1/object/public/thumbnails/`

export function thumbUrl(path) {
  if (!path) return null
  return `${THUMB_BASE}${path}`
}

export async function loadPhotos() {
  const { data, error } = await supabase
    .from('media_items')
    .select('id, file_name, title, description, keywords, category, animals_visible, animal_type, thumbnail_path, orientation')
    .in('status', ['approved', 'used'])
    .contains('projects', ['reiseziel-uganda'])
    .order('created_at', { ascending: false })
    .limit(500)

  if (error) throw error
  return (data || []).map(row => ({
    ...row,
    thumbnail_url: thumbUrl(row.thumbnail_path),
  }))
}
