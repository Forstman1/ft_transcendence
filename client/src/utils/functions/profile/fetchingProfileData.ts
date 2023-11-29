import axios from 'axios';

export async function getChartLineData(userId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/activitieshistory/${userId}`,
    { withCredentials: true },
  );
  return response.data;
}

export async function getMatchesResults(userId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/matchesresults/${userId}`,
    { withCredentials: true },
  );
  return response.data;
}



export async function getUserAchievements(userId: string): Promise<any> {
  const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/achievements/${userId}`,
    { withCredentials: true },
  );
  return response.data;
}

export async function getMatchesHistory(userId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/matcheshistory/${userId}`,
    { withCredentials: true },
  );
  return response.data;
}

export async function getUser(userId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/user/${userId}`,
    { withCredentials: true },
  );
  return response.data;
}


