log_file = open("um-server-01.txt") #defining log_file as a .txt file


def sales_reports(log_file): #sales_report is invoking the log_file variable
    for line in log_file: #creating a for loop
        line = line.rstrip() #removing characters at the end of the string
        day = line[0:3]
        if day == "Mon": #if statement created
            print(line)


sales_reports(log_file)
