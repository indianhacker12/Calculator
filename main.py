class ArithmeticCalculator:
    def __init__(self):
        pass

    def add(self, x, y):
        return x + y

    def subtract(self, x, y):
        return x - y

    def multiply(self, x, y):
        return x * y

    def divide(self, x, y):
        if y == 0:
            return "Error: Division by zero!"
        else:
            return x / y

# Example usage:
calculator = ArithmeticCalculator()
print(calculator.add(5, 3))  # Output: 8
print(calculator.multiply(4, 6))  # Output: 24
print(calculator.divide(10, 2))  # Output: 5
print(calculator.divide(10, 0))  # Output: Error: Division by zero!
