import Course from "./Course";
import { courses } from "./data";
import Navbar from "./Navbar";
import Theme from "./Theme";

function App() {
  return (
    <>
      <Theme />
      <Navbar />
      <div className="mt-8 mb-8 px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-6xl mx-auto ">
          {courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
