import { render } from "@testing-library/react";
import ListBlockItem from "../../../Block/List/list-block-item";
import { tasksMock } from "../../../../data";

it('the handler function should be called when the button is clicked when the input is filled', function () {

    const { getByTestId: getByTestIdListBlockItemFirst } = render(<ListBlockItem idBlock={tasksMock[1].block} title={tasksMock[1].name}/>);
    const { getByTestId: getByTestIdListBlockItemSecond } = render(<ListBlockItem idBlock={tasksMock[2].block} title={tasksMock[2].name}/>);
    const { getByTestId: getByTestIdListBlockItemThird } = render(<ListBlockItem idBlock={tasksMock[3].block} title={tasksMock[3].name}/>);
    const { getByTestId: getByTestIdListBlockItemFourth } = render(<ListBlockItem idBlock={tasksMock[4].block} title={tasksMock[4].name}/>);

    // const { getByTestId: getByTestIdListBlockItem } = render (
    //     //@ts-ignore
    //     tasksMock?.map((task) => {
    //         <ListBlockItem title={task.name} idBlock={task.block}/>
    //     })
    // );

    const ButtonAddFirst = getByTestIdListBlockItemFirst(1);
    const ButtonAddSecond = getByTestIdListBlockItemSecond(2);
    const ButtonAddThird = getByTestIdListBlockItemThird(3);
    const ButtonAddFourth = getByTestIdListBlockItemFourth(4);

    // Проверка, что кнопка разблокирована
    expect(ButtonAddFirst).toBeEnabled();

    // Проверка, что кнопки заблокированы
    expect(ButtonAddSecond).toBeDisabled();
    expect(ButtonAddThird).toBeDisabled();
    expect(ButtonAddFourth).toBeDisabled();
});