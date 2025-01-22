interface IRoutes {
    blocks: () => string;
    task: () => string;
}

const routes: IRoutes = {
    blocks: () => '/',
    task: () => '/task',
};

export default routes;
