#!/bin/python3
# Code to be verified
from contextlib import redirect_stdout
from student.lib import eat, sleep, tired, context


def student_code():
@    @thecode@@
    return {"count_eat": context.count_eat, "count_slept": context.count_slept}


if __name__ == "__main__":
    with open('submission_output.txt', 'w+') as f:
        with redirect_stdout(f):
            # Will print to a file instead of a stdout
            student_code()
    with open('res_output.txt', 'r') as res_file:
        res_data = res_file.read()
        with open('submission_output.txt', 'r') as submission_file:
            submission_data = submission_file.read()
            if res_data == submission_data:
                # print without a newline
                print('True', end='', flush=True)
            else:
                print(submission_data, end='', flush=True)
