def equivalent(string1,string2):

	## String1: abc
	## String2: bac

	common = []

	if len(string1) != len(string2):
		return False

	for i in string1:
		if i in string2:
			common.append(i)

	print(common)

	if len(common) == len(string1):
		return True
	else:
		return False 

print( equivalent("abc","bad") )


NlongN

{
	a : 0,
	b : 1,
	c : 0
}