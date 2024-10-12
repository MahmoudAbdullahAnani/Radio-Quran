export interface Radio {
  id: number; 
  name: string; 
  url: string; 
  recent_date: string; 
}

export interface RadiosResponse {
  radios: Radio[];
}
