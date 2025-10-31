import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  console.log("id 값:", { id });
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<p>Loading movie info</p>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<p>Loading movie videos</p>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
