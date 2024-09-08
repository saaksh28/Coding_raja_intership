import tkinter as tk
from tkinter import Entry, Button, Label  # Import the Label widget

def calculate_expression():
    try:
        expression = entry.get()
        result = eval(expression)
        result_label.config(text=f"Result: {result}")
    except Exception as e:
        result_label.config(text=f"Error: {str(e)}")

# Create the main application window
app = tk.Tk()
app.title("Voice Calculator")

# Create and place widgets
entry = Entry(app, width=40)
entry.pack(pady=10)

calculate_button = Button(app, text="Calculate", command=calculate_expression)
calculate_button.pack()

result_label = Label(app, text="", font=("Helvetica", 16))
result_label.pack(pady=20)

# Start the main loop
app.mainloop()