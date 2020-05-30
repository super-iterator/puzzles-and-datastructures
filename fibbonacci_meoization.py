lookup = dict()

def fib(n):

	if not lookup.get(n):

		if n <=1:
			lookup[n] = n
		else:
			lookup[n] = fib(n-1) + fib(n-2)
	
	else:

		return lookup[n]