#include <iostream>
#include <vector>
#include <string>

using namespace std;

void escrever(){
    cout << "Digite seu nome"<<endl;

}
void limpartela(){
    system("cls");
}

class Fila{
    vector<string> pacientes;
    string nome;
    public:
        void setLugar(){
            escrever();
            cin>> nome;
            cout << endl;
            pacientes.push_back(nome);
        }
        void sairFila(){
            escrever();
            cin >> nome;
            for(int i=0;i<pacientes.size();i++){
                if(pacientes[i]==nome){
                    pacientes[i].pop_back();
                }

            }

        }
        void getFila(){
            for(int i=0;i<pacientes.size();i++){
                cout << pacientes[i]<<" ";               
            }
            cout << endl;
        }
        void getPosicao(){
            string nome;
            escrever();
            cin >> nome;
            for(int i=0;i<pacientes.size();i++){
                if(pacientes[i]==nome){
                    cout  << "Voce esta na posicao "<< i+1 << endl;
                   
                }
                if(i-1==pacientes.size()){
                    cout << "Voce nao esta na fila"<<endl;
                }
            }
        }
};
int main(){
    int acao;
    Fila fila;
    string nome;
     while(acao!=0){
        cout << endl;
        cout <<"Digite a acao"<<endl;
        cout <<"0 para sair"<<endl;
        cout <<"1 para adicionar na fila"<<endl;
        cout <<"2 para ver sua posicao"<<endl;
        cout <<"3 para sair da fila"<<endl;
        cout << "4 para limpar a tela"<<endl;
         cin >> acao;
         if(acao==1){
            fila.setLugar();
            fila.getFila();
         }
         if(acao==2){
            fila.getPosicao();
         }
         if(acao==3){
            fila.sairFila();
         }
         if(acao==4){
            limpartela();
         }
            
        }
    return 0;
}

