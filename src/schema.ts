export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      bookmarked: {
        Row: {
          id: number
          post_id: number | null
        }
        Insert: {
          id?: number
          post_id?: number | null
        }
        Update: {
          id?: number
          post_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookmarked_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      followers: {
        Row: {
          count: number | null
          follower_id: number | null
          id: number
        }
        Insert: {
          count?: number | null
          follower_id?: number | null
          id?: number
        }
        Update: {
          count?: number | null
          follower_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "followers_follower_id_fkey"
            columns: ["follower_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      following: {
        Row: {
          count: number | null
          following_id: number | null
          id: number
        }
        Insert: {
          count?: number | null
          following_id?: number | null
          id?: number
        }
        Update: {
          count?: number | null
          following_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "following_following_id_fkey"
            columns: ["following_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      post_comment: {
        Row: {
          comment_id: number | null
          content: string | null
          created_at: string | null
          id: number
          published_At: string | null
        }
        Insert: {
          comment_id?: number | null
          content?: string | null
          created_at?: string | null
          id?: number
          published_At?: string | null
        }
        Update: {
          comment_id?: number | null
          content?: string | null
          created_at?: string | null
          id?: number
          published_At?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_comment_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      post_tag: {
        Row: {
          id: number
          tags: string[] | null
        }
        Insert: {
          id?: number
          tags?: string[] | null
        }
        Update: {
          id?: number
          tags?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "post_tag_id_fkey"
            columns: ["id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          author_id: number | null
          claps: number | null
          created_at: string | null
          id: number
          post_content: string | null
          published: boolean | null
          published_at: string | null
          summary: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          author_id?: number | null
          claps?: number | null
          created_at?: string | null
          id?: number
          post_content?: string | null
          published?: boolean | null
          published_at?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: number | null
          claps?: number | null
          created_at?: string | null
          id?: number
          post_content?: string | null
          published?: boolean | null
          published_at?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: number
          interests: string[] | null
          intro: string | null
          last_name: string | null
          profile_id: string | null
          registered_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: number
          interests?: string[] | null
          intro?: string | null
          last_name?: string | null
          profile_id?: string | null
          registered_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: number
          interests?: string[] | null
          intro?: string | null
          last_name?: string | null
          profile_id?: string | null
          registered_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
