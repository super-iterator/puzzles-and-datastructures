import unittest
import math


def lambdas(num):
	J = lambda x : math.sqrt(x)
	return J(num)


def sorting(list=[4,3,5,6,2,1]):
	return sorted(list)

def getNumber():
	a = 11
	return a

class parent(object):
	def __init__(self):
		print("Hello from parent")

	def sayHi(self):
		print("Hi .. hello!!")

	@classmethod
	def sayNo(self):
		print("Say No")

	@classmethod
	def sayYes(self):
		print("Say YES")

class child(parent):
	def __init__(self):
		super(child,self).__init__()
		print("This is a child")


class testCode(unittest.TestCase):

	def test_return(self):
		self.assertIsInstance(getNumber(),int)

	def test_equal(self):
		self.assertEqual(getNumber(),11)

	def test_greater(self):
		self.assertGreater(getNumber(),10)


if __name__ == "__main__":
	print(lambdas(100))
	print(sorting())
	
	# Initializing the child class
	child.sayYes()
	child.sayNo()

	print("\n")

	c = child()
	c.sayHi()


	unittest.main()

