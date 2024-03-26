import { fireEvent, render } from "@testing-library/react";
import Input from "../input";
import Button from "../../Button/button";

it('the handler function should be called when the button is clicked when the input is filled', function () {
    const onClickMock = jest.fn();
    const { getByTestId: getByTestIdInput } = render(<Input idBlock={1} />);
    const { getByTestId: getByTestIdButton } = render(<Button handleClickBtn={onClickMock} name={"Submit"}/>);

    // Извлечение инпута и кнопки
    const name = getByTestIdInput("name-input");
    const submitButton = getByTestIdButton("submit-button");

    // Проверка, что кнопка заблокирована
    expect(submitButton).toBeDisabled();
    
    // Вызов события клика по кнопке
    fireEvent.click(submitButton);

    // Заполнение инпута
    fireEvent.change(name, { target: { value: "Something" } });

    // Проверка, что кнопка разблокирована
    expect(submitButton).toBeEnabled();
});