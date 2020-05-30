# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"
import re

def solution(S):
    
    s = re.compile(" |-").split(S)
        
    strNum = ''.join(s)
    
    resultNum = ""
    
    while strNum:
        
        
        # resultNum += strNum[:3] + '-' if len(strNum) >=3 else strNum[:]
        
        if len(strNum) == 4:    
            resultNum += strNum[:2] + '-' + strNum[2:]
            strNum = ""
        elif len(strNum) > 4:
            resultNum += strNum[:3] + '-'
            strNum = strNum[:3]
        else:
            resultNum += strNum[:]
            strNum = strNum[:]
        
            
            
            
        # strNum = strNum[3:]
        
        
    return resultNum