import { useState } from "react";
import styles from "./app.module.css";

export const App = () => {
	const [operand1, setOperand1] = useState("");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");

	const BUTTONS = [
		"+",
		"-",
		"=",
		"C",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
	];

	const onNumberButtonClick = (num) => {
		if (operator === "") {
			setOperand1(operand1 + num);
		} else if (operator === "+" || operator === "-") {
			setOperand2(operand2 + num);
		} else if (operator === "=") {
			setOperator("");
			setOperand1(num);
		}
	};

	const onOperationButtonClick = (operation) => {
		if (operation === "+" || operation === "-") {
			setOperator(operation);
		} else if (operation === "=") {
			if (operator === "+") {
				setOperand1(Number(operand1) + Number(operand2));
			} else if (operator === "-") {
				setOperand1(Number(operand1) - Number(operand2));
			}
			setOperator("=");
			setOperand2("");
		} else if (operation === "C") {
			setOperand1("");
			setOperand2("");
			setOperator("");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.display}>
				<div
					className={
						operator === "=" ? styles.result : styles.display
					}
				>{`${operand1} ${
					operator === "=" ? "" : operator
				} ${operand2}`}</div>
			</div>
			<div className={styles.keyboard}>
				<div className={styles.buttons}>
					{BUTTONS.map((button) => (
						<button
							className={
								Number(button) || button === "0"
									? styles.number
									: styles.operation
							}
							key={button}
							onClick={
								Number(button) || button === "0"
									? () => onNumberButtonClick(button)
									: () => onOperationButtonClick(button)
							}
						>
							{button}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
