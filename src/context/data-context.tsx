import React from "react";

interface IDataContext {
  courses: any[];
  setCourses: (newCourses: any) => void;
}

const defaultState : IDataContext = {
  courses: [],
  setCourses: () => {}
};

const CoursesContext = React.createContext<IDataContext>(defaultState);

export default CoursesContext;

/*import React, {FC, useState} from "react";

type DataContextState = {
  courses: any[];
  setCourses: (newCourses: any[]) => void;
}

const dataDefaultState = {
  courses: [],
  setCourses: ()=>{}
}

const DataContext = React.createContext<Da>(dataDefaultState);

const DataProvider: FC = ({ children }) => {

  const [courses, setCourses] = useState<any[]>(dataDefaultState.courses);

  const setCoursesFunction = (newCourses: any[]) => {console.log(newCourses); setCourses([...newCourses])}

  return (
    <DataContext.Provider value={{
      courses: courses,
      setCourses: setCoursesFunction
    }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };*/