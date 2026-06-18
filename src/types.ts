export interface CrewMember {
  role: string;
  name: string;
}

export interface CameraSpecs {
  ratio: string;
  lens: string;
  shutter: string;
  frameRate: string;
}

export interface ColorPalette {
  name: string;
  hex: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Automotive" | "Fashion" | "Lifestyle" | "Tech" | "All";
  year: string;
  coverUrl: string;
  description: string;
  brief: string;
  specs: CameraSpecs;
  colorPalette: ColorPalette[];
  crew: CrewMember[];
  videoMockUrl?: string;
}

export interface ServicePhase {
  id: string;
  number: string;
  title: string;
  description: string;
  tasks: string[];
  gear: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl: string;
}
