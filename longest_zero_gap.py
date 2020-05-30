def find_longest_zero_gap(N):

	binary = "{0:b}".format(N)

	gap_length = 0

	## split the array by ones, and exclude the last element, either zero(s) [not a gap] or one(s) [not needed]
	array = binary.split('1')[:-1]

	for gap in array:

		## starts with zero
		# if gap[0] == '0':
		if gap.startswith('0'):
			gap_length = len(gap) if len(gap) > gap_length else gap_length

	print 'Binary: ',binary
	print 'Array: ',array
	print 'Longest gap is: gap_length: ', gap_length

		


find_longest_zero_gap(15)