
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nnfjqciskjoyldboicvx.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uZmpxY2lza2pveWxkYm9pY3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzMzMjYsImV4cCI6MjA0MzAwOTMyNn0.t638XrdxljnCTT3qgehG0ooskiOb56-GNIiNUjOZK-s";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;