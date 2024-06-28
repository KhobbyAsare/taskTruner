export interface ProjectInterface {
  id: string;
  projectname: string;
  description: string;
  creator: string;
  startDate: string;
  endDate: string;
  keynotes: string[];
  members: Member[];
  labels: string[];
  organization: string;
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}
[];
