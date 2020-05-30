def find_max(S,start,end,max=0):
    
    if start == end:
        return max
    if S[start] > max:
        max = S[start]
    
    return find_max(S , start+1 , end , max)


if __name__ == "__main__":
	find_max([1,3,2,4,5,4,6,7,77,8,6,4,333,5,6],1,15)
