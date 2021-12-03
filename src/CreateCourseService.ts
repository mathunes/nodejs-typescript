interface Course {
    name: string;
    duration?: number; //optional
    educator: string;
}

class CreateCourseService {

    execute({ duration=10, educator, name }: Course) { //duration in default value
        console.log(name, duration, educator);
    }

}

export default new CreateCourseService;