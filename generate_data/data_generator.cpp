#include <iostream>
#include <random>
#include <fstream>
#include <sstream>
#include <ctime>

using namespace std;

const string CAUSE_PREFIX = "campaign_";
const string SPACE_TABS = "    ";
const int MAX_OBJECTS = 1000;

int getNumCauses()  {
    int numCauses = 0;
    cout << "how many causes?\n";
    cin >> numCauses;
    return numCauses;
}

int getNumObjects() {
    int numObj = 0;
    cout << "how many data points? (1000 MAX)\n";
    cin >> numObj;
    return numObj;
}

string genBool()    {
    return ( rand() % 2 == true ? "true" : "false" );
}

string generateLine(string email, int numCauses)    {
    string line = SPACE_TABS + "{\n";
    line += SPACE_TABS + SPACE_TABS + "\"email\": \"" + email + "\",\n";
    for(int i = 0; i < (numCauses - 1); i++)  {
        line += SPACE_TABS + SPACE_TABS + "\"" + CAUSE_PREFIX + to_string(i+1) + "\": " + genBool() + ",\n";
    }
    line += SPACE_TABS + SPACE_TABS + "\"" + CAUSE_PREFIX + to_string(numCauses) + "\": " + genBool() + "\n";
    line += SPACE_TABS + "}"; 
    return line;
}

string getOutFileName() {
    string name = "";
    cout << "output file name (include .json)\n";
    cin >> name;
    return name;
}

int main()  {
    srand(time(0));
    ifstream email_file("1000_emails.txt");
    if(!email_file) {
        cout << "email file not found\n";
        return -1;
    }
    ofstream mock_data;
    mock_data.open(getOutFileName());
    int numCauses = getNumCauses();
    int numObjs = getNumObjects();
    string curLine = "";
    mock_data << "[\n"; // first opening
    for(int i = 1; i < numObjs; i++)    {
        getline(email_file, curLine);
        mock_data << generateLine(curLine, numCauses) << ",\n";
        curLine = "";
    }
    mock_data << SPACE_TABS << generateLine(curLine, numCauses) << "\n" << "]";
    mock_data.close();
    email_file.close();
    return 0;
}

