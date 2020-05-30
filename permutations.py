# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

all_possibilities = set() 

def solution(N):
    
    if N == 0:
        return 1
        
    
    S = list( str(N) )
    shuffle( S , 0 , len(S)-1 )
            
    return len(all_possibilities)
  

def convert_check_add(S):
    num = ''.join(S)
    all_possibilities.add(num) if not num.startswith('0') else 0

def shuffle(S,left,right):
    if left == right:
        convert_check_add(S)
        
    else:
        for i in xrange(left,right+1):
            
            # Make a swap between 2 elements
            S[left] , S[i] = S[i] , S[left]
            
            shuffle( S , left+1 , right )
            
            S[left] , S[i] = S[i] , S[left]
        
        