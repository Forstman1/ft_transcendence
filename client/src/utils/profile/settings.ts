import axios from "axios";

export async function updateUser(data: any): Promise<any> {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/settings`,
      data,
      {
        withCredentials: true ,
      },
    );
    return response.data;
  }
  


