import "./App.css";
import music from "./assets/data.json";
import MusicSections from "./components/MusicSections";

function App() {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
        </nav>
      </header>
      <main>
        {music.map((el) => {
          return (
            <MusicSections
              key={el.genre}
              genre={el.genre.toUpperCase()}
              artists={el.Artistes}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
