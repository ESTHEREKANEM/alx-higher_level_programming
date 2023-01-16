#!/usr/bin/python3
"""This module contains a class to serve as base for other classes"""


import csv
import json
import os
import turtle


class Base:
   """This class will be the “base” of all other classes in this project """


    __nb_objects = 0

        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects
