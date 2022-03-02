import {
  addNewCourse,
  deleteCourse,
  getCourseWithId,
  getCourses,
  updateCourse,
  getCourseWithName,
} from "../controllers/courseController";

const routes = (app) => {
  app
    .route("/courses")
    .get((req, res, next) => {
      console.log(`request URL : ${req.originalUrl}`);
      console.log(`request method : ${req.method}`);
      next();
    }, getCourses)
    .post(addNewCourse);

  app.route("/courses/:search").get(getCourseWithName);

  app.route("/details/:name").get(getCourseWithId);

  app.route("/details/:courseID").put(updateCourse).delete(deleteCourse);
};

export default routes;
