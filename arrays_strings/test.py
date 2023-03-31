def funcSubstring(inputStr):
    max_palindrome = ""

    for i in range(len(inputStr)):
        for j in range(i, len(inputStr)):
            substr = inputStr[i:j+1]
            if substr == substr[::-1]:
                if len(substr) > len(max_palindrome):
                    max_palindrome = substr

    return max_palindrome

print(funcSubstring('YABCCBAZ'))
