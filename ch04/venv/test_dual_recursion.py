def rec(x):
    print x
    if x <=0 :
        return 0
    return   rec(x-1) + rec(x-1) 


if __name__ == "__main__":

	print 'final result: ', rec(3)
