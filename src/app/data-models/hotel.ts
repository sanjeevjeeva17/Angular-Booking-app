/*Data-model for hotels APi response*/
export interface Hotel {
  id: string;
  createdAt: Date;
  name: string;
  image: string;
  latitude: string;
  longitude: string;
  available: boolean;
  positiveReviews: number;
  negativeReviews: number;
  description: string;
}



