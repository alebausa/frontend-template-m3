const projects = [
  {
    title: "Ultimate to-do app",
    description: "Ultimate to-do app is an application to help people keep track of the tasks they have yet to finish",
    _id: 1,
  },
  {
    title: "Restaurant madness game",
    description: "Restaurant madness game is the game I did as the first project for Ironhack. It's a game where you have to organize different tables and make sure customers end up happy.",
    _id: 2,
  },
  {
    title: "Chill pill",
    description: "Chill pill is an online CBD store that we did as the project for the second module of Ironhack",
    _id: 3,
  },
  {
    title: "Lego Buddies",
    description: "Lego Stars is an app designed to help Lego users organize their pieces and keep track of their collection, a very useful tool for those with the house full of legos",
    _id: 4,
  }
]

class fakeAPI {

  getAllProjects() {
    return Promise.resolve({ data: projects });
  }

  getProject(id) {
    const data = [...projects].find(elem => elem._id === parseInt(id));
    return Promise.resolve({ data: data });
  }
}

export const fakeApi = new fakeAPI();