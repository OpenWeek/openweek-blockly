#!/bin/python3

#
#  Copyright (c)  2018 Ilias Boutchichi
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU Affero General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU Affero General Public License for more details.
#
#  You should have received a copy of the GNU Affero General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

import os, subprocess, shlex
from contextlib import redirect_stdout
from random import randint

A = []
def studentcode():
    global A
    @@algo@@

if __name__ == "__main__":
    correct_list = sorted(A)
    if correct_list == A:
        print('True', end='', flush=True)
    else:
        print('failed')
