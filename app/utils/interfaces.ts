export interface Posts {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface Comments {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface Users {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
