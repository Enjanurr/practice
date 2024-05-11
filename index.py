#syntax and operation (circle)
#formula = 3.14 * r ** 2

def cal_area(radius):
   area = 3.14 * radius ** 2 
   print('answer is', area )
   return area

area = int(input('radius: '))
cal_area(area)
      
