{
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getTodData1 = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const result = await response.json();
    console.log(result);
    return result;
  };
  getTodData1();

  type something = { something: string };

  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const data: something = { something: "something" };

      if (data) {
        resolve(data);
      } else {
        reject("Data is not found Any more ");
      }
    });
  };

  //Calling Create Promise function

  const showdata = async (): Promise<something> => {
    const data: something = await createPromise();
    return data;
  };

  showdata();
}
