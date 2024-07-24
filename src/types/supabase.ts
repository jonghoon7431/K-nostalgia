 export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cart: {
        Row: {
          count: number | null
          created_at: string
          id: number
          image: string | null
          product_id: string | null
          product_name: string | null
          product_price: number | null
          user_id: string | null
        }
        Insert: {
          count?: number | null
          created_at?: string
          id?: number
          image?: string | null
          product_id?: string | null
          product_name?: string | null
          product_price?: number | null
          user_id?: string | null
        }
        Update: {
          count?: number | null
          created_at?: string
          id?: number
          image?: string | null
          product_id?: string | null
          product_name?: string | null
          product_price?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "local_food"
            referencedColumns: ["product_id"]
          },
        ]
      }
      chat: {
        Row: {
          content: string | null
          created_at: string
          id: number
          room_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          room_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          room_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["room_id"]
          },
          {
            foreignKeyName: "chat_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string | null
          created_at: string
          id: number
          post_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          post_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          post_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          count: number | null
          created_at: string
          id: number
          is_like: boolean | null
          post_id: string | null
          user_id: string | null
        }
        Insert: {
          count?: number | null
          created_at?: string
          id?: number
          is_like?: boolean | null
          post_id?: string | null
          user_id?: string | null
        }
        Update: {
          count?: number | null
          created_at?: string
          id?: number
          is_like?: boolean | null
          post_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      local_food: {
        Row: {
          category: string | null
          count: number | null
          created_at: string
          description: string | null
          food_image: string | null
          food_name: string | null
          location: string | null
          price: number | null
          product_id: string
          title_image: string | null
        }
        Insert: {
          category?: string | null
          count?: number | null
          created_at?: string
          description?: string | null
          food_image?: string | null
          food_name?: string | null
          location?: string | null
          price?: number | null
          product_id?: string
          title_image?: string | null
        }
        Update: {
          category?: string | null
          count?: number | null
          created_at?: string
          description?: string | null
          food_image?: string | null
          food_name?: string | null
          location?: string | null
          price?: number | null
          product_id?: string
          title_image?: string | null
        }
        Relationships: []
      }
      orderd_list: {
        Row: {
          count: number | null
          created_at: string
          id: number
          name: string | null
          order_num: string | null
          order_status: string | null
          price: number | null
          user_id: string | null
        }
        Insert: {
          count?: number | null
          created_at?: string
          id?: number
          name?: string | null
          order_num?: string | null
          order_status?: string | null
          price?: number | null
          user_id?: string | null
        }
        Update: {
          count?: number | null
          created_at?: string
          id?: number
          name?: string | null
          order_num?: string | null
          order_status?: string | null
          price?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          chat_name: string | null
          created_at: string
          created_user_id: string | null
          id: string
          room_id: string | null
        }
        Insert: {
          chat_name?: string | null
          created_at?: string
          created_user_id?: string | null
          id: string
          room_id?: string | null
        }
        Update: {
          chat_name?: string | null
          created_at?: string
          created_user_id?: string | null
          id?: string
          room_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rooms_created_user_id_fkey"
            columns: ["created_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar: string | null
          coupon: string | null
          created_at: string
          email: string | null
          id: string
          nickname: string | null
          password: string | null
        }
        Insert: {
          avatar?: string | null
          coupon?: string | null
          created_at?: string
          email?: string | null
          id?: string
          nickname?: string | null
          password?: string | null
        }
        Update: {
          avatar?: string | null
          coupon?: string | null
          created_at?: string
          email?: string | null
          id?: string
          nickname?: string | null
          password?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
