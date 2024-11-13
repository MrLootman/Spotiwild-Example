import { Artist } from "../types/musicSections";
import "./MusicSections.css";

function MusicSections({
  genre,
  artists,
}: {
  genre: string;
  artists: Artist[];
}) {
  const slicedArray: Artist[] = artists
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="music-section">
      <h2>{genre}</h2>

      {slicedArray.map((el) => {
        return (
          <figure key={el.id}>
            <img src={el.imgSrc} />
            <figcaption>{el.name}</figcaption>
          </figure>
        );
      })}
    </section>
  );
}

export default MusicSections;
